import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTab = () => {
    clickTabItem(tabId)
  }

  const activeTab = isActive ? 'active-tab' : 'inactive-tab'

  return (
    <li className="tab-list">
      <button type="button" className={`tab ${activeTab}`} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
