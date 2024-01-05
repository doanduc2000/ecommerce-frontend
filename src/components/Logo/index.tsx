import { Great_Vibes } from 'next/font/google';
const font = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
});
const Logo = (props: any) => {
  return (
    <div className={font.className} style={props.style}>
      <span style={props.fontSizeLarge}>Gạo</span> Nails-Style
    </div>
  );
};
export default Logo;
