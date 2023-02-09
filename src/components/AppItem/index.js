import './index.css'

const AppItem = props => {
  const {appDetail} = props
  const {appName, imageUrl} = appDetail
  return (
    <li className="list-item">
      <img src={imageUrl} alt={appName} className="img" />
      <p className="app_name">{appName}</p>
    </li>
  )
}

export default AppItem
