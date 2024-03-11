import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {delBlog, getBlogs} from "../../../service/blogsService";
import {useNavigate} from "react-router-dom";

export default function Listblog(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const blogs= useSelector(state =>{
        return state.blogs.blogs;
    } );
    useEffect(() => {
        dispatch(getBlogs())
    }, []);
    const handleDelete = async (id) => {
        try {
            await dispatch(delBlog(id));
            // Sau khi xóa thành công, cập nhật danh sách blog
            dispatch(getBlogs());
            navigate('/home');
        } catch (error) {
            console.error("Error deleting blog:", error);
            // Xử lý lỗi khi xóa blog
        }
    }
    return(
        <>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Content</th>
                    <th scope="col">Likes</th>
                    <th scope="col">status</th>
                    <th scope="col">Delete</th>
                    <th scope="col">status</th>
                </tr>
                </thead>
                <tbody>
                {
                    blogs.map((item, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{item.content}</td>
                            <td>{item.likes}</td>
                            <td>{item.status}</td>
                            <td><button type="button" className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}