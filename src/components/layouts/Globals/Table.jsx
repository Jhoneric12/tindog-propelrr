import { FileExcelOutlined, SearchOutlined } from "@ant-design/icons";
import { ExportTableButton, SearchTableInput, Table as ANTTABLE } from "ant-table-extensions";
import { Col, Row } from "antd";
import React, { memo, useState } from "react";
import { format_addCommas } from "../../../helpers/currencyFormat";

const Table = ({
  dataSource,
  setDataSource,
  data,
  columns,
  withCsv,
  noCsv,
  isLoading,
  rowKey,
  onChange,
  fileName,
  props,
  addNew,
  importCSV,
  scrollable = true,
  disabled = false,
  disableCsv = false,
}) => {
  return (
    <>
      {withCsv ? (
        <Row justify="space-between">
          <Col span={7}>
            <SearchTableInput
              columns={columns}
              dataSource={data}
              setDataSource={setDataSource}
              inputProps={{
                placeholder: "Search",
                prefix: <SearchOutlined />,
              }}
              disabled={disabled}
            />
          </Col>
          <Col>
            <div className="flex gap-2 items-center">
              <ExportTableButton
                dataSource={data}
                columns={columns}
                fileName={fileName}
                btnProps={{ icon: <FileExcelOutlined /> }}
                showColumnPicker
                disabled={disableCsv}
              >
                Export to CSV
              </ExportTableButton>
              {importCSV}
              {addNew}
            </div>
          </Col>
        </Row>
      ) : (
        <>
          <div className="flex flex-col-2 justify-between">
            <div className="w-[50%]">
              <SearchTableInput
                columns={columns}
                dataSource={data}
                setDataSource={setDataSource}
                inputProps={{
                  placeholder: "Search",
                  prefix: <SearchOutlined />,
                }}
                disabled={disabled}
              />
            </div>
            {noCsv ? noCsv : null}
          </div>
        </>
      )}
      <ANTTABLE
        bordered
        loading={isLoading}
        dataSource={dataSource}
        columns={columns}
        rowKey={rowKey ? rowKey : "id"}
        scroll={{
          x: scrollable ? "max-content" : true,
        }}
        pagination={{
          showTotal: (total, range) => (
            <span>
              Showing {format_addCommas(range[0])} to {format_addCommas(range[1])} of{" "}
              {format_addCommas(total)}
            </span>
          ),
          showSizeChanger: true,
          defaultPageSize: 10,
          pageSizeOptions: [10, 20, 25, 50, 100],
          responsive: true,
        }}
        onChange={onChange}
        {...props}
      />
    </>
  );
};

export default memo(Table);
