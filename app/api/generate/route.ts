import { NextRequest, NextResponse } from 'next/server'
import Groq from 'groq-sdk'

export async function POST(request: NextRequest) {
  try {
    const { content, language, templateType } = await request.json()
    console.log('Generate API called with templateType:', templateType)

    const apiKey = process.env.GROQ_API_KEY
    console.log('API Key exists:', !!apiKey)
    
    if (!apiKey) {
      console.log('No API key configured')
      return NextResponse.json({ 
        content,
        message: 'No API key configured. Document returned without AI enhancement.'
      })
    }

    let improvedContent = content
    let hasError = false

    try {
      console.log('Creating Groq client...')
      const groq = new Groq({ apiKey })

      const languageNames: Record<string, string> = {
        en: 'English',
        ru: 'Russian',
        kz: 'Kazakh',
      }

      const prompt = `You are a professional document editor specializing in formal ${languageNames[language] || 'English'} documents.

Your task is to improve and polish the following document while:
1. Keeping the same language (${languageNames[language] || 'English'})
2. Maintaining the document's original intent and structure
3. Filling in any placeholder text (marked with [brackets]) with appropriate formal language
4. Ensuring proper formatting and professional tone
5. Correcting any grammatical or stylistic issues
6. Making sure dates, names, and other specific details remain as placeholders for the user to fill in

Document type: ${templateType}

Original document:
${content}

Please return ONLY the improved document text, without any explanations or comments. Keep all placeholder brackets [like this] intact for user-specific information.`

      console.log('Calling Groq API...')
      const response = await groq.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: 'llama-3.3-70b-versatile',
        temperature: 0.7,
        max_tokens: 2048,
      })

      console.log('Groq response received')
      const responseText = response.choices[0]?.message?.content
      if (responseText) {
        improvedContent = responseText
        console.log('Content improved, length:', improvedContent.length)
      }
    } catch (err) {
      console.warn('AI enhancement error:', err)
      hasError = true
    }

    console.log('Returning response with hasError:', hasError)
    return NextResponse.json({ 
      content: improvedContent,
      ...(hasError && { message: 'AI enhancement temporarily unavailable. Original document returned.' })
    })
  } catch (error) {
    console.error('Generation error:', error)
    
    try {
      const bodyText = await request.text()
      const body = JSON.parse(bodyText)
      return NextResponse.json({ 
        content: body.content,
        message: 'AI service unavailable. Original document returned.'
      })
    } catch {
      return NextResponse.json(
        { error: 'Failed to process request' },
        { status: 500 }
      )
    }
  }
}
