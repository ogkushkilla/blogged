import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 77,
      date: '2023-02-21T00:45:00.000Z',
      id: '423',
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 58,
      date: '2022-01-31T00:00:00.000Z',
      id: '567',
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 24,
      date: '2023-02-24T00:45:00.000Z',
      id: '789',
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nickname4',
      ups: 124,
      date: '2023-03-10T00:45:00.000Z',
      id: '123',
    }
  ];
  return (
    <ul className={style.list}>
      {
        postsData.map((postData) =>
          <Post key={postData.id} postData={postData} />
        )
      }
      {/* СПИСКИ
      {
        [
          // prevJSX
          <Post key={0} postData={postsData[0]} />,
          <Post key={1} postData={postsData[1]} />,
          <Post key={2} postData={postsData[2]} />,
          // после удаления Post key={1}, удалится элемент ниже.
          <Post key={3} postData={postsData[3]} />,
        ]
      }
      {
        [
          // nextJSX
          <Post key={0} postData={postsData[0]} />,
          // удалили этот <Post key={1} postData={postsData[0]} />,
          // ключи пересчитались, но пропсы остались неизменны(индексы), то есть
          // в prevJSX посты которые ниже были с postData[1] и postData[2],
          // в nextJSX их данные поменялись - запустилась перерисовка постов.
          // это повлияло на производительность. Если бы ключи были уникальные,
          // то перерисовки бы не произошло, так как у элементов с уникальными
          // ключами данные остаются теми же, какие они были изначально.
          // индексы массива можно использовать в случаях если элементы массива
          // не будут удаляться, сортироваться, добавляться и тд.
          <Post key={1} postData={postsData[2]} />,
          <Post key={2} postData={postsData[3]} />,
        ]
      } */}
    </ul>
  );
};
