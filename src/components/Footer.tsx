import styled from 'styled-components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 375px;
  height: 48px;
  background: #121212;
`;

const Content = styled.div`
  display: flex;
  flex-basis: 20%;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;

const Text = styled.div<{ color?: string }>`
  font-size: 8.2px;
  font-weight: 500;
  margin-top: 1px;
  color: ${props => props.color || '#878787'};
`;

export default function Footer() {
  const pathname = usePathname();

  const menuData = [
    {
      id: 0,
      name: 'Home',
      link: '/home',
      text: 'Home',
    },
    {
      id: 1,
      name: 'Search',
      link: '/search',
      text: 'Search',
    },
    {
      id: 2,
      name: 'Soon',
      link: '',
      text: 'Coming Soon',
    },
    {
      id: 3,
      name: 'Downloads',
      link: '',
      text: 'Downloads',
    },
    {
      id: 4,
      name: 'More',
      link: '',
      text: 'More',
    },
  ];

  return (
    <Wrapper>
      <>
        {menuData.map(item => (
          <Content key={item.id}>
            <Link href={item.link} key={item.id}>
              {pathname === item.link ? (
                <>
                  <Image
                    src={`/assets/Footer/selected${item.name}.svg`}
                    alt="item"
                    width={20}
                    height={20}
                  />
                  <Text color="white">{item.text}</Text>
                </>
              ) : (
                <>
                  <Image
                    src={`/assets/Footer/${item.name}.svg`}
                    alt="item"
                    width={20}
                    height={20}
                  />
                  <Text>{item.text}</Text>
                </>
              )}
            </Link>
          </Content>
        ))}
      </>
    </Wrapper>
  );
}
