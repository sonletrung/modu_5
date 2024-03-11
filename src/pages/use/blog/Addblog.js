import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {addBlog} from "../../../service/blogsService";

    export default function Addblog(){
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const blogs = useSelector(state => state.blogs.blogs);
        const handleAdd = async (values,actions) => {
            try {
                const data = { ...values};
                await dispatch(addBlog(data));
                navigate('/home');
            } catch (error) {
                console.error("Error adding blog:", error);
                // Xử lý lỗi, ví dụ: hiển thị thông báo cho người dùng
            }
        };
        return (

            <div className={'row'}>
                <div className="offset-3 col-6 mt-5">
                    <h1 style={{textAlign: 'center'}}>Add Blog</h1>
                    <Formik initialValues={{title: '', content: ''}} onSubmit={(values,actions) => {
                        handleAdd(values,actions)
                    }}>
                        <Form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Title</label>
                                <Field type="text" className={'form-control'} name={'title'}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Content</label>
                                <Field type="text" className={'form-control'} name={'content'}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        )
    }