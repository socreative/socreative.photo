
import Image from 'next/image'
import { Fragment } from 'react'

const ScImage = (props) => {
  return (
    <Fragment>
      <Image
        src={props.src}
        alt={props.alt + ' - Socreative Photography'}
        quality={77}
        width={395}
        height={395}
        style={{
          minWidth: '100%',
          height: 'auto'
        }}
        priority
      />
    </Fragment>
  );
};
export default ScImage;
