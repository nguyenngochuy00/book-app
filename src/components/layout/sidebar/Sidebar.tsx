import './sidebar.scss'

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="container">
          <h2>Logo</h2>
          <img src="/assets/svg/sidebar/th-large.svg" alt="th-large" />
          <img src="/assets/svg/sidebar/book.svg" alt="book" />
          <img src="/assets/svg/sidebar/user.svg" alt="user" />
          <img src="/assets/svg/sidebar/life-ring.svg" alt="life-ring" />
          <img src="/assets/svg/sidebar/wrench.svg" alt="wrench" />
          <img src="/assets/svg/sidebar/sign-out-alt.svg" alt="sign-out-alt" />
        </div>
      </div>
    </>
  )
}

export default Sidebar