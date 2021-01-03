import React, { memo, useState } from "react"
import { Form, Input, Button, Select } from "antd"
import { FormattedMessage } from "react-intl"
import { ApplicationUtils } from "../../../utils"
import { Building } from "../../../Models/Builds.model"
import { useAppState, useAppActions } from "../../../context/App/store"
const { Option } = Select
const AddBuilds = () => {
  const [form] = Form.useForm()

  const renderFloorCountOption = () => {
    return ApplicationUtils.createFloorCount().map((floorCount, index) => {
      return (
        <Option key={index} value={floorCount}>
          {floorCount}
        </Option>
      )
    })
  }
  const onFinish = async (buildModel: Building) => {
  }



  const onFinishFailed = (errorInfo: any) => {
    ApplicationUtils.openNotification("danger","Uyarı","Selamlarrr");

    console.log("Failed:", errorInfo)
  }
  return (
    <>
    <button onClick={()=>{
    }}>tıkla</button>
    <Form
      form={form}
      initialValues={{ remember: false }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
      requiredMark={true}
    >
      <Form.Item
        label={<FormattedMessage id={"buildingNo"} />}
        name="buildingNumber"
        rules={[
          {
            required: true,
            type: "string",
            message: "Bina Numarası Giriniz"
          }
        ]}
      >
        <Input placeholder={"Bina Numarası Giriniz."} />
      </Form.Item>
      <Form.Item
        name="floorCount"
        label={<FormattedMessage id="floorCount" />}
        hasFeedback
        rules={[{ required: true, message: "Kat Sayısı Giriniz." }]}
      >
        <Select placeholder={<FormattedMessage id="floorCountPlaceHolder" />}>
          {renderFloorCountOption()}
        </Select>
      </Form.Item>
      <Form.Item
        name="apartmentCount"
        label={<FormattedMessage id="apartmentCount" />}
        hasFeedback
        rules={[{ required: true, message: "Apartman Sayısı Giriniz" }]}
      >
        <Select
          placeholder={<FormattedMessage id="apartmentCountPlaceHolder" />}
        >
          {renderFloorCountOption()}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          <FormattedMessage id="save" />
        </Button>
      </Form.Item>
    </Form>
    </>
  )
}
export default AddBuilds
