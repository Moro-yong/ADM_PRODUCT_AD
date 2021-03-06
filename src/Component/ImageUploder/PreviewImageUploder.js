import { useState } from 'react';

export default function PreviewImageUploder() {
  // const onChange = e => {
  //   const img = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append('file', img);
  //   console.log(formData); // FormData {}
  //   for (const keyValue of formData) console.log(keyValue); // ["img", File] File은 객체
  // };

  // const deleteImgage = () => {
  //   formData.append('file', img);
  // }

  //파일 미리볼 url을 저장해줄 state
  const [fileImage, setFileImage] = useState('');

  // 파일 저장
  const saveFileImage = e => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  // 파일 삭제
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage('');
  };

  return (
    <>
      <h1>이미지 미리보기</h1>
      <table>
        <tbody>
          <tr>
            <th>이미지</th>
            <td>
              <div>
                {fileImage && (
                  <img
                    alt="sample"
                    src={fileImage}
                    style={{ margin: 'auto' }}
                  />
                )}
                <div style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <input
                    name="imgUpload"
                    type="file"
                    accept="image/*"
                    onChange={saveFileImage}
                  />
                  <button
                    style={{
                      backgroundColor: 'gray',
                      color: 'white',
                      width: '55px',
                      height: '40px',
                      cursor: 'pointer',
                    }}
                    onClick={() => deleteFileImage()}
                  >
                    {' '}
                    삭제{' '}
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
    // <div>
    //   <input
    //     type="file"
    //     accept="image/jpg, impge/png, image/jpeg, image/gif"
    //     name="profile_img"
    //     onChange={onChange}
    //   ></input>
    //   <button onClick={deleteImgage}>삭제</button>
    // </div>
  );
}
