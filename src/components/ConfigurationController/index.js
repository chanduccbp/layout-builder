// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeShowContent = () => {
        onToggleShowContent()
      }

      const onChangeShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="config-controller">
          <h1>Layout</h1>
          <div className="checkbox-cont">
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="showContentInput"
                onChange={onChangeShowContent}
                checked={showContent}
              />
              <label htmlFor="showContentInput">Content</label>
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="showLeftNavbarInput"
                onChange={onChangeShowLeftNavbar}
                checked={showLeftNavbar}
              />
              <label htmlFor="showLeftNavbarInput">Left Navbar</label>
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="showRightNavbarInput"
                onChange={onChangeShowRightNavbar}
                checked={showRightNavbar}
              />
              <label htmlFor="showRightNavbarInput">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
