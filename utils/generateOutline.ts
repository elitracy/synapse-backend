export default async function(transcript: string): Promise<string> {
  setTimeout(() => {
    console.log('[LOG] Generating outline')
  }, 5000)
  return 'I am a test outline'
}
