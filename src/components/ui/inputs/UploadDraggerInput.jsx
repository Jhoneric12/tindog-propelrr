import { UploadOutlined } from "@ant-design/icons";
import { Form, Upload } from "antd";

// SAMPLE USAGE
// const { preview, handleImageUpload, reset, fileList } = useImagePreview();

// useEffect(() => {
//   if (createSuccess) {
//     reset();
//   }
// }, [createSuccess]);
// <UploadDraggerInput
//   isRequired={false}
//   label="Event Banner"
//   name="banner"
//   preview={preview}
//   fileList={fileList}
//   onChange={handleImageUpload}
//   onRemove={reset}
// />;

const UploadDraggerInput = ({
  label = "Event Image",
  name = "banner",
  isImage = true,
  isRequired = true,
  preview,
  fileList,
  onChange,
  onRemove,
}) => {
  return (
    <Form.Item
      label={label}
      name={name}
      layout="vertical"
      valuePropName="fileList"
      getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
      rules={isRequired ? [{ required: true, message: "Please upload an image" }] : []}
    >
      <Upload.Dragger
        showUploadList={false}
        multiple={false}
        accept="image/*"
        beforeUpload={() => false}
        maxCount={1}
        fileList={fileList}
        onChange={onChange}
        onRemove={onRemove}
      >
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="mx-auto"
            style={{
              marginTop: 16,
              maxWidth: "100%",
              maxHeight: 200,
              borderRadius: 8,
              objectFit: "cover",
            }}
          />
        ) : (
          <>
            <p className="ant-upload-drag-icon">
              <UploadOutlined />
            </p>
            <p>Click or drag image to this area to upload.</p>
            <p>Only image files are allowed.</p>
          </>
        )}
      </Upload.Dragger>
    </Form.Item>
  );
};

export default UploadDraggerInput;
