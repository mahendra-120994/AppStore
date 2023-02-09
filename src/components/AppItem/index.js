import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="list-item">
      <img src={imageUrl} alt={appName} className="img" />
      <p className="app_name">{appName}</p>
    </li>
  )
}

export default AppItem
