import BasicInformationBox from './BasicInformationBox';
import LinkButton from './LinkButton';

const Links = () => {
  return (
    <BasicInformationBox
      direction={{
        topBottom: 'bottom',
        leftRight: 'right'
      }}
    >
      <ul className="flex flex-col justify-end text-right align-center space-y-2">
        <li>
          <LinkButton href={'/'}>
            <span>Home</span>
          </LinkButton>
        </li>
        <li>
          <LinkButton
            href={'https://github.com/cattynip/atoms-pictures'}
            target="_blank"
          >
            <span>Source Code</span>
          </LinkButton>
        </li>
        <li>
          <LinkButton
            href={'https://github.com/cattynip/atoms-pictures/issues/new'}
            target="_blank"
          >
            <span>Make a New Issue</span>
          </LinkButton>
        </li>
      </ul>
    </BasicInformationBox>
  );
};

export default Links;
