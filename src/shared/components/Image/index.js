import styled from "styled-components";

const StyledImage = styled.img`
  height: ${({ height }) => height}px;
  max-width: 100%;
  width: ${({ width }) => width}px;
`;

const Image = ({ alt, loading = "lazy", width, src, ...props }) => (
  <picture>
    <StyledImage
      height={width}
      {...props}
      loading={loading}
      width={width}
      alt={alt}
      src={src}
    />
  </picture>
);

export { Image };
