import Link from "next/link";
import { FaTripadvisor } from 'react-icons/fa'

const Social = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="https://www.facebook.com/profile.php?id=61565953885941" target="_blank">
            <i className="fab fa-facebook-f"></i>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/villa_drobnipijesak?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
            <i className="fab fa-instagram"></i>
          </Link>
        </li>
        {/* <li>
          <Link href="https://www.linkedin.com" target="_blank">
            <i className="fab">
              <FaTripadvisor className="fab"/>
            </i>
          </Link>
        </li> */}
      </ul>
    </>
  );
};

export default Social;
