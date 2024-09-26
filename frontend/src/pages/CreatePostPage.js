import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


export default function CreatePostPage() {
  return (
    <form>
      <input type="title" placeholder={"제목을 입력하세요."}/>
      <input type="summary" placeholder={"글 요약을 입력하세요."}/>
      <input type="file"/>
      <ReactQuill />
      <button>글쓰기</button>
    </form>
  );
}
