import { Table } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const columns = [
  {
    title: "Маршрут",
    dataIndex: "name",
    key: "id",
  },
  //   {
  //     title: "Точка 1 ",
  //     dataIndex: "point1",
  //   },
  //   {
  //     title: "Точка 2 (lat, lng)",
  //     dataIndex: "point2",
  //   },
  //   {
  //     title: "Точка 3 (lat, lng)",
  //     dataIndex: "point3",
  //   },
];

const TableComponent = () => {
  const data = useSelector((state) => state.maps.positionState);

  const dataSource = data.map((way) => ({
    key: way.id,
    idWay: way.id,
    name: way.name,
  }));

  const onRowSelect = (selectedRows) => {
    const rowData = data.find((c) => c.id === selectedRows[0].idWay);
  };
  return (
    <div>
      <Table
        rowSelection={{
          type: "radio",
          onChange: onRowSelect,
        }}
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
};

export default TableComponent;
