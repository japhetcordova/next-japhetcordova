"use client";
import { Card, CardTitle, CardContent, CardHeader, CardAction} from "../../../components/ui/card";
import { Mail } from "lucide-react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ExternalLink } from "lucide-react";
export const Connect = () =>{
    const action = false;
    const link = "/profile";
    return(
        <Card className="py-4 h-full">
            <CardHeader>
                <CardTitle className="m-0">
                    <div className="flex items-center text-xl">
                        <Mail className="h-4 w-4 mr-2 flex items-end text-muted-foreground"/> Connect
                    </div>
                    
                </CardTitle>
                { action &&(
                    <Link href={link}>
                        <CardAction className="text-xs ">
                            <div className="flex">
                                <p>See more</p><ChevronRight className="h-4.5 w-4.5"/>
                            </div>
                        </CardAction>
                    </Link>
                )}
                
            </CardHeader>
            <CardContent className="flex flex-col mt-0 pl-3.5 gap-4">
                    <a
                        className="w-full bg-background2 rounded-md p-2 hover:bg-muted transition-colors duration-200 cursor-pointer"
                        href="mailto:japhetcordova9@gmail.com"
                    >
                        <h1 className="text-sm font-semibold mb-0.5">Email</h1>
                        <p className="text-xs">japhetcordova9@gmail.com</p>
                    </a>
                    <div>
                        <h1 className="font-semibold mb-1">Let&apos;s Talk</h1>
                        <div
                            className="flex-1 flex justify-between bg-background2 rounded-md p-2 hover:bg-muted transition-colors duration-200 cursor-pointer"
                            role="button"
                            tabIndex={0}
                            aria-label="Schedule a call via Calendly"
                            onKeyDown={(e) => e.key === 'Enter' && window.open('https://calendly.com/japhetcordova9/schedule-a-call', '_blank', 'noopener,noreferrer')}
                            onClick={() => window.open('https://calendly.com/japhetcordova9/schedule-a-call', '_blank', 'noopener,noreferrer')}
                        >
                            <h1 className="text-sm font-semibold mb-0.5">Schedule a Call</h1>
                            <ChevronRight className="h-4.5 w-4.5"/>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-semibold mb-1">Speaking Engagements</h1>
                        <div
                            className="w-full bg-background2 rounded-md p-2 transition-colors duration-150 r"
                            
                        >
                            <p className="text-xs text-muted-foreground">Available for speaking at events about software development and emerging technologies.</p>
                            <button
                                type="button"
                                aria-label="Schedule a call via Calendly"
                                onKeyDown={(e) => e.key === 'Enter' && window.open('https://calendly.com/japhetcordova9/schedule-a-call', '_blank', 'noopener,noreferrer')}
                                onClick={() => window.open('https://calendly.com/japhetcordova9/schedule-a-call', '_blank', 'noopener,noreferrer')}
                                className="text-sm font-semibold mb-0.5 mt-1 hover:underline hover:cursor-pointer flex items-center bg-transparent border-none p-0"
                                >
                                Get in touch <ChevronRight className="ml-2 h-4 w-4"/>
                            </button>

                        </div>
                    </div>
                    <div>
                        <h1 className="font-semibold mb-1">Social Links</h1>
                        <div className="flex gap-2">
                            <div
                                className="w-full flex justify-center bg-background2 rounded-md p-2 hover:bg-muted transition-colors duration-150 cursor-pointer border"
                                role="button"
                                tabIndex={0}
                                aria-label="Visit GitHub profile"
                                onKeyDown={(e) => e.key === 'Enter' && window.open('https://github.com/japhetcordova', '_blank', 'noopener,noreferrer')}
                                onClick={() => window.open('https://github.com/japhetcordova', '_blank', 'noopener,noreferrer')}
                            >
                                <svg 
                                    width="20" 
                                    height="20" 
                                    fill="var(--foreground)"
                                    viewBox="0 0 24 24"
                                    role="img"
                                    >
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                </svg>
                            </div>
                            <div
                                className="w-full   flex justify-center bg-background2 rounded-md p-2 hover:bg-muted  transition-colors duration-150 cursor-pointer border"
                                role="button"
                                tabIndex={0}
                                aria-label="Visit LinkedIn profile"
                                onKeyDown={(e) => e.key === 'Enter' && window.open('https://www.linkedin.com/in/japhet-cordova-2aa591223/', '_blank', 'noopener,noreferrer')}
                                onClick={() => window.open('https://www.linkedin.com/in/japhet-cordova-2aa591223/', '_blank', 'noopener,noreferrer')}
                            >
                                <svg 
                                    width="20" 
                                    height="20" 
                                    fill="var(--foreground)"
                                    viewBox="0 0 24 24"
                                    role="img"
                                    >
                                    <path d="M22 3.47059V20.5294C22 20.9194 21.8451 21.2935 21.5693 21.5693C21.2935 21.8451 20.9194 22 20.5294 22H3.47059C3.08056 22 2.70651 21.8451 2.43073 21.5693C2.15494 21.2935 2 20.9194 2 20.5294V3.47059C2 3.08056 2.15494 2.70651 2.43073 2.43073C2.70651 2.15494 3.08056 2 3.47059 2H20.5294C20.9194 2 21.2935 2.15494 21.5693 2.43073C21.8451 2.70651 22 3.08056 22 3.47059ZM7.88235 9.64706H4.94118V19.0588H7.88235V9.64706ZM8.14706 6.41177C8.14861 6.18929 8.10632 5.96869 8.02261 5.76255C7.93891 5.55642 7.81542 5.36879 7.65919 5.21039C7.50297 5.05198 7.31708 4.92589 7.11213 4.83933C6.90718 4.75277 6.68718 4.70742 6.46471 4.70588H6.41177C5.95934 4.70588 5.52544 4.88561 5.20552 5.20552C4.88561 5.52544 4.70588 5.95934 4.70588 6.41177C4.70588 6.86419 4.88561 7.29809 5.20552 7.61801C5.52544 7.93792 5.95934 8.11765 6.41177 8.11765C6.63426 8.12312 6.85565 8.0847 7.06328 8.00458C7.27092 7.92447 7.46074 7.80422 7.62189 7.65072C7.78304 7.49722 7.91237 7.31346 8.00248 7.10996C8.09259 6.90646 8.14172 6.6872 8.14706 6.46471V6.41177ZM19.0588 13.3412C19.0588 10.5118 17.2588 9.41177 15.4706 9.41177C14.8851 9.38245 14.3021 9.50715 13.7799 9.77345C13.2576 10.0397 12.8143 10.4383 12.4941 10.9294H12.4118V9.64706H9.64706V19.0588H12.5882V14.0529C12.5457 13.5403 12.7072 13.0315 13.0376 12.6372C13.3681 12.2429 13.8407 11.9949 14.3529 11.9471H14.4647C15.4 11.9471 16.0941 12.5353 16.0941 14.0176V19.0588H19.0353L19.0588 13.3412Z"/>
                                </svg>
                            </div>
                            <div
                                className="w-full   flex justify-center bg-background2 rounded-md p-2 hover:bg-muted border transition-colors duration-150 cursor-pointer"
                                role="button"
                                tabIndex={0}
                                aria-label="Visit Facebook profile"
                                onKeyDown={(e) => e.key === 'Enter' && window.open('https://www.facebook.com/japhet.cordova.2024', '_blank', 'noopener,noreferrer')}
                                onClick={() => window.open('https://www.facebook.com/japhet.cordova.2024', '_blank', 'noopener,noreferrer')}
                            >
                                <svg 
                                    width="20" 
                                    height="20" 
                                    fill="var(--foreground)"
                                    viewBox="0 0 24 24"
                                    role="img"
                                    >
                                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
                                </svg>
                            </div>
                        </div>
                        
                    </div>
                    <div>
                        <h1 className="font-semibold mb-1">A member of</h1>
                        <div className="flex flex-col gap-1">
                        <div
                            className="w-full flex justify-between bg-background2 rounded-md p-2 hover:bg-muted transition-colors duration-150 cursor-pointer items-center h-auto group"
                            role="button"
                            tabIndex={0}
                            aria-label="Visit UMTC page"
                            onKeyDown={(e) => e.key === 'Enter' && window.open('https://www.facebook.com/umtccomputingeducatio', '_blank', 'noopener,noreferrer')}
                            onClick={() => window.open('https://www.facebook.com/umtccomputingeducation', '_blank', 'noopener,noreferrer')}
                        >
                            <p className="text-xs text-muted-foreground overflow-hidden">University of Mindanao Tagum City (UMTC) Computing Education Department</p>
                            <ExternalLink className="h-3.5 w-3.5 basis-5"/>
                        </div>
                        <div
                            className="w-full flex justify-between bg-background2 rounded-md p-2 hover:bg-muted transition-colors duration-150 cursor-pointer items-center h-auto"
                            role="button"
                            tabIndex={0}
                            aria-label="Visit CLC page"
                            onKeyDown={(e) => e.key === 'Enter' && window.open('https://www.facebook.com/clctagum', '_blank', 'noopener,noreferrer')}
                            onClick={() => window.open('https://www.facebook.com/clctagum', '_blank', 'noopener,noreferrer')}
                        >
                            <p className="text-xs text-muted-foreground">Christian Life Center (CLC) Tagum City</p>
                            <ExternalLink className="h-3.5 w-3.5"/>
                        </div>
                        </div>
                    </div>
            </CardContent>
        </Card>
    )
}