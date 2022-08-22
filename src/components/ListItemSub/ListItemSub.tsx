import { PropsSubs } from "../../models"

function ListItemSub({sub}:PropsSubs) {
  return (
    <li key={sub?.nick} >
        <img src={sub?.avatar} alt={sub?.nick} />
        <h4>{sub?.nick} (<small>{sub?.subMonths}</small>)</h4>
        <p>{sub?.description?.substring(0, 100)}</p>
    </li>
  )
}
export default ListItemSub