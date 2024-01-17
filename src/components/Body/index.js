// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-cont">
          {showLeftNavbar && (
            <navbar className="left-nav-cont">
              <h1>Left Navbar Menu</h1>
              <ul className="list-cont">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </navbar>
          )}
          {showContent && (
            <div className="content-cont">
              <h1>Content</h1>
              <p>
                Lorem ipsum dsnlknd adc acddd mnkzidi nskcnlai sds wdffd ascf.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <navbar className="right-nav-cont">
              <h1>Right Navbar</h1>
              <div>Ad 1</div>
              <div>Ad 2</div>
            </navbar>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
