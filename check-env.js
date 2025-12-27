// Diagnostic script to check if OpenAI API key is configured
console.log('\n=== Environment Variable Check ===\n');

if (process.env.OPENAI_API_KEY) {
  const key = process.env.OPENAI_API_KEY;
  const maskedKey = key.substring(0, 7) + '...' + key.substring(key.length - 4);
  console.log('✅ OPENAI_API_KEY is set');
  console.log('   Format:', maskedKey);
  console.log('   Length:', key.length, 'characters');
  
  if (key.startsWith('sk-')) {
    console.log('✅ Key format looks correct (starts with sk-)');
  } else {
    console.log('❌ Warning: Key should start with "sk-"');
  }
  
  if (key.length > 40) {
    console.log('✅ Key length looks reasonable');
  } else {
    console.log('❌ Warning: Key seems too short');
  }
} else {
  console.log('❌ OPENAI_API_KEY is NOT set');
  console.log('\nPlease ensure your .env.local file contains:');
  console.log('OPENAI_API_KEY=sk-your-actual-key-here');
  console.log('\nAfter adding it, restart the dev server with:');
  console.log('1. Press Ctrl+C to stop the server');
  console.log('2. Run: npm run dev');
}

console.log('\n=================================\n');
