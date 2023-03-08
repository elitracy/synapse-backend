export default async function(transcript: string): Promise<string> {
  setTimeout(() => {
    console.log('[LOG] Generating outline')
  }, 10000)
  return 'I am a test outline'
}
