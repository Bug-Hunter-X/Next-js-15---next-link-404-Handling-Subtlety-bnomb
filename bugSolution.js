```javascript
import Link from 'next/link';
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();

  const handleLinkClick = (e) => {
    e.preventDefault();
    router.push('/about').catch((err) => {
      console.error('Failed to navigate:', err);
      // Handle the error appropriately.  For example, display a user-friendly message or redirect to another page.
      alert('Page not found!'); 
    });
  };

  return (
    <div>
      <a href='/about' onClick={handleLinkClick}>
        About Us
      </a>
    </div>
  );
}

export default MyComponent;
```
This solution uses `useRouter` to programmatically handle navigation.  The `.catch` block handles potential errors during navigation, allowing for more graceful error handling, such as displaying a custom message to the user instead of a potentially jarring 404.