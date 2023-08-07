export default async function Read(props) {

  const resRead = await fetch(`http://localhost:9999/topics/${props.params.id}`, {cache: 'no-store'})
  const topic = await resRead.json()

  return (
    <>
      <h2>{topic.title}</h2>
      {topic.body}
      {topic.id}
      <br />그럼 이 문장은 다 나오나?
    </>
  )
}