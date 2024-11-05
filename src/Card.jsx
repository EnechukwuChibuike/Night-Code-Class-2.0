function Card(props) {
  return (
    <figure className="h-[60vh] w-[30%] border-[1px] border-black">
      <img src="/portraitman.png" alt="man" className="w-full h-1/2" />

      <figcaption className="grid text-center pt-3">
        <strong>{props.caption}</strong>
        <small>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          dolorum autem molestias quidem voluptate tenetur dicta eum vitae fugit
          ut, omnis ex perspiciatis ipsam. Nobis debitis earum veniam ab
          delectus?
        </small>
      </figcaption>
    </figure>
  );
}

export default Card;
