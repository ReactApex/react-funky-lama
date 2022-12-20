import { ReactComponent as MoneyIcon } from '@material-icons/svg/svg/attach_money/outline.svg'
import { ReactComponent as PaidIcon } from '@material-icons/svg/svg/paid/outline.svg'
import { ReactComponent as BoxIcon } from '@material-icons/svg/svg/inventory_2/outline.svg'
import { ReactComponent as CategoryIcon } from '@material-icons/svg/svg/category/outline.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
	return (
		<footer>
			<ul>
				{/* <li>
					<Link href='/term-conditions'>Terms and Conditions</Link>
				</li> */}
				<li>
					<p>© 2022 Funky LIamas</p>
					<div>
						<Link to="/laze-earn">
							<MoneyIcon />
							<p>Laze and Earn</p>
						</Link>
						<Link to="/raid-earn">
							<PaidIcon />
							<p>Raid and Earn</p>
						</Link>
						<Link to="/funky-boxes">
							<BoxIcon />
							<p>Funky Boxes</p>
						</Link>
						<Link to="/funky-slots">
							<CategoryIcon />
							<p>Funky Slots</p>
						</Link>
					</div>
				</li>
				{/* <li>
					<Link href='/policy'>Privacy Policy</Link>
				</li> */}
			</ul>
		</footer>
	)
}
