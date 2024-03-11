import {Link} from "react-router-dom";

export default function Login() {
    return (
        <div>
            <div >
                <h1 style={{textAlign:'center'}}>Login</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"></input>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>

                    <button type="submit" className="btn btn-secondary">
                        <Link to={'register'} style={{textDecoration:'none',color:"white"}}>Register</Link>
                    </button>
                </form>
            </div>
        </div>
    )
}