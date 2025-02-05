export default function Jumbotron({
  title,
  subTitle = "Welcome to React E-commerce",
}) {
  return (
    <div className="container-fluid jumbotron" style={{marginTop:'-8px'}}>
      <div className="row">
        <div className="col text-center p-5 jumbotron">
          <h1 className="fw-bold">{title}</h1>
          <p className="lead">{subTitle}</p>
        </div>
      </div>
    </div>
  );
}
