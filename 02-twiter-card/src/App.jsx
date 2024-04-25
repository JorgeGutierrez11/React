import { TwiterFollowCard } from './TwiterFollowCard'

export function App() {
  /* const format = (userName) => `@${userName}`
      const mauricio = {
      formatUserName: format, 
      userName: 'mauricio', 
      name: 'Mauricion Santamaria',
       initialIsFollowing:true
    }; */

  const users = [
    {
      userName: 'midudev',
      name: 'Miguel Duran',
      isFollowing: true
    },
    {
      userName: 'pherald',
      name: 'Pablo H',
      isFollowing: false
    },
    {
      userName: 'pacoH',
      name: 'Paco Hdezs',
      isFollowing: true
    }
  ]

  return (
    <section className='app'>
      {/*<TwiterFollowCard
        {...mauricio}
      />
      <TwiterFollowCard
        formatUserName={format}
        userName="migue"
        name="Miguel Angel Duran"
      />  */}
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwiterFollowCard
            key={userName}
            userName={userName}
            name={name}
            initialIsFollowing={isFollowing}>
          </TwiterFollowCard>
        ))
      }
    </section>
  )
}   