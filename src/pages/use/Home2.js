
import Nabbar1 from "../../Components/Nabbar1";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCountry } from "../../service/CountryService";
import * as PropTypes from "prop-types";

function Navbar1(props) {
    return null;
}

Navbar1.propTypes = {onSearch: PropTypes.func};
export default function Home2() {
    const dispatch = useDispatch();

    const Country = useSelector(state =>
        state.country.country);

    useEffect(() => {
        dispatch(getCountry());
    }, []);

    return (
        <>
            <div>
                <Nabbar1 />
            </div>
            <>
                <>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">flags</th>
                            <th scope="col">name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Country.map((country, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td><img src={country.flags.png} alt={country.flags.alt} /></td>
                                <td>{country.name.common}</td>
                            </tr>
                        ))}
                        </tbody>

                    </table>
                </>
            </>
        </>
    );
}
