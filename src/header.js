const Header = (props) => {
  return (
    <header className="idd">{props.title}</header>
  )
}
export default Header;
Header.defaultProps={
  title:"random"
}