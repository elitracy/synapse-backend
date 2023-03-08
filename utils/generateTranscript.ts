export default async function(media: any): Promise<string> {
  setTimeout(() => {
    console.log('[LOG] Generating transcript')
  }, 5000)
  return 'I am a test transcript'
}
