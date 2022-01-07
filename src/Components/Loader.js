
import loadingImg from "./../images/loading-buffering.gif"
function Loader(props) {
  return (
    <>
      {props.isLoading ?
        <div className="loading-class">
          <div className="sub-loader">
            <img src={loadingImg} alt="...Loader" />
          </div>
        </div>
        : null
      }
    </>
  )
}
export default Loader;