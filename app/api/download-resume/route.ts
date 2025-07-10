import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'

export async function GET(request: NextRequest) {
    try {
        const filePath = path.join(process.cwd(), 'public', 'resume', 'Sachin_Maurya_Resume.pdf')

        if (!fs.existsSync(filePath)) {
            return NextResponse.json({ error: 'Resume not found' }, { status: 404 })
        }

        const fileBuffer = fs.readFileSync(filePath)

        // Enhanced logging
        const userAgent = request.headers.get('user-agent') || 'Unknown'
        const timestamp = new Date().toISOString()

        console.log(`📄 Resume downloaded - ${timestamp} - User Agent: ${userAgent}`)

        return new NextResponse(fileBuffer, {
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename="Sachin_Maurya_Frontend_Developer_Resume.pdf"',
                'Content-Length': fileBuffer.length.toString(),
                'Cache-Control': 'public, max-age=3600',
                'X-Download-Success': 'true',
            },
        })
    } catch (error) {
        console.error('❌ Download error:', error)
        return NextResponse.json(
            { error: 'Download failed', details: 'Please try again later' },
            { status: 500 }
        )
    }
}