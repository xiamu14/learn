export default function appendToFormData(data: Record<string, any>): FormData {
  const formData = new FormData();
  Object.keys(data).forEach(key => {
    formData.append(key, data[key]);
  });
  return formData;
}
