import Link from 'next/link'

export default function navbar() {
    let navbarStyle = {
        width: '100%',
        backgroundColor: '#edf2f7',
        height: '3rem',
        display: 'flex',
        justifyContent: 'space-between'
      }

      return (
        <div style={navbarStyle}>
          <Link href="/"><a>Coders SB</a></Link>
          <Link href="/samplePage"><a>sample</a></Link>
        </div>
      );
  }