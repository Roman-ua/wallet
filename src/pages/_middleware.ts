import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

const secret = process.env.SECRET as string;

const middleware = (req: any) => {
  const { cookies } = req;

  const jwt = cookies.OursiteJWT;
  const url = req.url;

  if (url.includes('/main')) {
    console.log(jwt, 'jwt');
    if (jwt === undefined) {
      console.log(jwt, '!jwt');
      return NextResponse.redirect('/auth');
    }

    try {
      verify(jwt, secret);

      return NextResponse.next();
    } catch (e) {
      return NextResponse.redirect('/auth');
    }
  }
  return NextResponse.next();
};

export default middleware;
