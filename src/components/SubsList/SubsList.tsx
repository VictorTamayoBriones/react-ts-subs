import { PropsSubs } from "../../models"
import { ListItemSub } from "../ListItemSub"

function SubsList({subs}:PropsSubs) {
  return (
    <ul>
        {subs?.map(sub => <ListItemSub sub={sub}/>)}
    </ul>
  )
}
export default SubsList