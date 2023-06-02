import { useStorage } from "@plasmohq/storage/hook"


function IndexPopup() {
  const [webhookUrl, setWebhookUrl] = useStorage("webhookUrl")

  return (
    <div>
      <h1>
        Memiarz 0.1
      </h1>
      <label>
        <p>webhook URL</p>
        <textarea style={{ width: 400, height: 50 }} onChange={e => setWebhookUrl(e.target.value)} value={webhookUrl}/>
      </label>
    </div>
  )
}

export default IndexPopup
