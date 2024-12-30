import {CiMail, CiPhone} from "react-icons/ci"

const DetailCompany = ({job}) => {
    const {companyName, contactPhone, contactEmail} = job
  return (
    <div className="card glass">
        <div className="card-body">
            <h2 className="card-title text-primary">{companyName}</h2>
            <ul className="meun">
                <li>
                    <span><CiPhone />{contactPhone}</span>
                </li>
                <li>
                    <span><CiMail />{contactEmail}</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default DetailCompany