'use client'

import useSWR from 'swr';  
import * as React from 'react';
import { ShortURL } from '@/database/shortURLs';
import Box from '@mui/joy/Box';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import Link from '@mui/joy/Link';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { visuallyHidden } from '@mui/utils';
import Button from '@mui/joy/Button';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (
    a: { [key in Key]: number | string | Date },
    b: { [key in Key]: number | string | Date },
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}


interface HeadCell {
    disablePadding: boolean;
    id: keyof ShortURL;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Name',
    },
    {
        id: 'url',
        numeric: false,
        disablePadding: true,
        label: 'Destination URL',
    },
    {
        id: 'visits',
        numeric: true,
        disablePadding: true,
        label: 'Visits',
    },
    {
        id: 'dateCreated',
        numeric: false,
        disablePadding: true,
        label: 'Date Added',
    },
];

interface EnhancedTableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof ShortURL) => void;
    order: Order;
    orderBy: string;
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler =
        (property: keyof ShortURL) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <thead>
            <tr>
                {headCells.map((headCell) => {
                    const active = orderBy === headCell.id;
                    return (
                        <th
                            key={headCell.id}
                            aria-sort={
                                active
                                    ? ({ asc: 'ascending', desc: 'descending' } as const)[order]
                                    : undefined
                            }
                        >
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <Link
                                underline="none"
                                color="neutral"
                                textColor={active ? 'primary.plainColor' : undefined}
                                component="button"
                                onClick={createSortHandler(headCell.id)}
                                fontWeight="lg"
                                startDecorator={
                                    headCell.numeric ? (
                                        <ArrowDownwardIcon sx={{ opacity: active ? 1 : 0 }} />
                                    ) : null
                                }
                                endDecorator={
                                    !headCell.numeric ? (
                                        <ArrowDownwardIcon sx={{ opacity: active ? 1 : 0 }} />
                                    ) : null
                                }
                                sx={{
                                    '& svg': {
                                        transition: '0.2s',
                                        transform:
                                            active && order === 'desc' ? 'rotate(0deg)' : 'rotate(180deg)',
                                    },
                                    '&:hover': { '& svg': { opacity: 1 } },
                                }}
                            >
                                {headCell.label}
                                {active ? (
                                    <Box component="span" sx={visuallyHidden}>
                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                ) : null}
                            </Link>
                        </th>
                    );
                })}
                <th></th>
            </tr>
        </thead>
    );
}

const fetcher = async (url: string) => fetch(url).then(res => res.json());

export default function ShortURLTable() {
    const [order, setOrder] = React.useState<Order>('desc');
    const [orderBy, setOrderBy] = React.useState<keyof ShortURL>('dateCreated');
    const [selectedRow, setSelectedRow] = React.useState(-1);
    const { data, mutate } = useSWR('/api/shorturls', fetcher);
    const [ rows, setRows] = React.useState<ShortURL[]>([]);

    React.useEffect(() => {
        if (data) {
            setRows(data);
        }
    }, [data]);

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof ShortURL,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSave = async (row: ShortURL, index: number) => {

        const updatedRow = {
            name: row.name,
            url: document.getElementById(`shorturl-table-row-${index}-url`)?.textContent,
            visits: row.visits,
            dateCreated: row.dateCreated,
        };
        
        await fetch('/api/shorturls', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedRow),
        });
        
        await mutate();

        setSelectedRow(-1);
    };

    const handleCancel = (index: number) => {
        
        setRows(data);
        setSelectedRow(-1);
    };

    const handleEdit = (index: number) => {

        setSelectedRow(index);
    };

    const handleDelete = async (row: ShortURL) => {

        await fetch(`/api/shorturls?name=${row.name}`, {
            method: 'DELETE',
        });
        await mutate();

        setSelectedRow(-1);
    };

    const handleCreate = async () => {

        const name = document.getElementById('shorturl-table-add-name')?.textContent;
        const url = document.getElementById('shorturl-table-add-url')?.textContent;

        if (!name || !url) return;

        const newRow = {
            name: name,
            url: url
        };

        await fetch('/api/shorturls', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRow),
        });

        await mutate();

        document.getElementById('shorturl-table-add-name')!.textContent = '';
        document.getElementById('shorturl-table-add-url')!.textContent = '';
    }

    return (
        <Sheet
            variant="outlined"
            sx={{ width: '100%', boxShadow: 'sm', borderRadius: 'sm', overflowX: 'auto' }}
        >
            <Table
                aria-labelledby="tableTitle"
                hoverRow
                sx={{
                    padding: '10px',
                    '--TableCell-headBackground': 'transparent',
                    '& thead th:nth-of-type(1)': {
                        width: '120px',
                    },
                    '& thead th:nth-of-type(2)': {
                        width: '90%',
                        minWidth: '400px',
                    },
                    '& thead th:nth-of-type(3)': {
                        width: '70px',
                    },
                    '& thead th:nth-of-type(4)': {
                        width: '100px',
                    },
                    '& thead th:nth-of-type(5)': {
                        width: '150px',
                    },
                    '& tbody td:nth-of-type(5) > div': {
                        justifyContent: 'flex-end',
                    },
                    '& tbody tr td:nth-of-type(2)': {
                        wordBreak: 'break-all',
                    },
                    '& tr > td:nth-of-type(3)': { textAlign: 'right' },
                    overflowX: 'auto' 
                }}
            >
                <EnhancedTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                />
                <tbody>
                    {rows.slice().sort(getComparator(order, orderBy))
                        .map((row, index) => {
                            const selected = index === selectedRow;

                            return (
                                <tr
                                    tabIndex={-1}
                                    key={row.name}
                                    style={
                                        selected
                                          ? {
                                            backgroundColor: 'rgba(0, 0, 0, 0.05)'
                                          }
                                          : {}
                                      }
                                >
                                    <td>
                                        {row.name}
                                    </td>
                                    <td id={`shorturl-table-row-${index}-url`} contentEditable={selected && 'true'}>
                                        {row.url}
                                    </td>
                                    <td>{row.visits}</td>
                                    <td>{row.dateCreated && new Date(row.dateCreated).toLocaleDateString() }</td>
                                    <td>
                                        <Box sx={{ display: 'flex', gap: 1 }}>
                                            {selected ? <>
                                                <Button 
                                                    size="sm" 
                                                    variant="soft"
                                                    color="success"
                                                    onClick={() => handleSave(row, index)}
                                                >
                                                    Save
                                                </Button>
                                                <Button 
                                                    size="sm" 
                                                    variant="plain"
                                                    color="neutral"
                                                    onClick={() => handleCancel(index)}
                                                >
                                                    Cancel
                                                </Button>
                                            </> : <>
                                                <Button 
                                                    size="sm" 
                                                    variant="plain"
                                                    color="neutral"
                                                    onClick={() => handleEdit(index)}
                                                >
                                                    Edit
                                                </Button>
                                                <Button 
                                                    size="sm" 
                                                    variant="soft"
                                                    color="danger"
                                                    onClick={() => handleDelete(row)}
                                                >
                                                    Delete
                                                </Button>
                                            </>}
                                        </Box>
                                    </td>
                                </tr>
                            );
                        })}
                    <tr>
                        <td contentEditable={true} id="shorturl-table-add-name" style={{borderBottom: '1px solid #000'}}></td>
                        <td contentEditable={true} id="shorturl-table-add-url" style={{borderBottom: '1px solid #000'}}></td>
                        <td></td>
                        <td></td>
                        <td style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            gap: 1
                        }}>
                            <Button 
                                size="sm" 
                                variant="soft"
                                color="success"
                                onClick={handleCreate}
                            >
                                Add
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Sheet>
    );
}
