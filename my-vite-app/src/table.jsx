import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import { Box } from "@mui/material";


export default function Table() {
    const columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "userId", headerName: "User ID", width: 70 },
      { field: "title", headerName: "Title", width: 400 },
      { field: "body", headerName: "Body", width: 600 },
    ];
    const [data, setData] = useState([]);
    useEffect(() => {
      async function getData() {
        const da = await fetch("https://jsonplaceholder.typicode.com/posts")
        const datas = await da.json();
        setData(datas);
      }
      getData();
    }, []
    )
  
    return (
      <Box sx={{ height: 680, width: "100%", px: [2, 3], py: [2, 3] }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    )
  }