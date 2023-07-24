import { Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/table.scss";

const columns = [
  {
    title: "Маршрут",
    dataIndex: "name",
    key: "id",
  },
];

const TableComponent = () => {
  const data = useSelector((state) => state.maps.positionState);
  const dispatch = useDispatch();

  const dataSource = data.map((way) => ({
    key: way.id,
    idWay: way.id,
    name: way.name,
  }));

  const onRowSelect = (selectedRows) => {
    const rowData = data.find((c) => c.id === selectedRows[0]);
    dispatch({ type: "saga/setSelectedWay", payload: rowData });
  };

  return (
    <div className="table">
      <Table
        rowSelection={{
          type: "radio",
          onChange: onRowSelect,
        }}
        columns={columns}
        dataSource={dataSource}
        pagination={false}
      />
    </div>
  );
};

export default TableComponent;
