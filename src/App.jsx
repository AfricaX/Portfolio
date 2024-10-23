import './App.css'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import { Progress } from "@/components/ui/progress"

function App() {
  return (
    <div className='flex-1 p-4'>
      <div className='grid grid-cols-2 gap-6'>


        <Card className="w-[350px] h-auto self-start">
          <CardHeader>
            <CardTitle>Christian Jude S Africa</CardTitle>
            <CardDescription>
              Looking for a suitable On-the-Job Training where I could practice my knowledge and develop my personality as a career person while utilizing my skills.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <img src="media/pfp.png" alt="profile" className="rounded-md"/>
              <Label>Address: 27 Molave st. MRV Sta. Lucia Pasig City</Label>
              <Label>Email: christianafrica29@gmail.com</Label>
              <Label>Contact No.: 09942311063</Label>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Send An Email</Button>
            <Button>Hire Now</Button>
          </CardFooter>
        </Card>


        <div className='flex flex-col space-y-8'>


          <div>
            <h1 className="text-2xl font-bold mb-2">Certificates:</h1>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline mt-2">• IT Essentials</Button>
              </PopoverTrigger>
              <PopoverContent>MFI Polytechnic Institute Inc., Pasig City (February 2024)</PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline mt-2">• Networking Essentials</Button>
              </PopoverTrigger>
              <PopoverContent>MFI Polytechnic Institute Inc., Pasig City (February 2024)</PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline mt-2">• COMPUTER SYSTEMS SERVICING NC II</Button>
              </PopoverTrigger>
              <PopoverContent>Hyper Young Institute Of Technology Inc., (June 2024)</PopoverContent>
            </Popover>
          </div>


          <div>
            <h1 className="text-2xl font-bold mb-2">Education:</h1>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="outline">Tertiary</Button>
              </HoverCardTrigger>
              <HoverCardContent>
                MFI Polytechnic Institute Inc. (Information Technology, 2023-Present)
              </HoverCardContent>
            </HoverCard>
            <HoverCard className="mt-2">
              <HoverCardTrigger asChild>
                <Button variant="outline">Senior High</Button>
              </HoverCardTrigger>
              <HoverCardContent>
                STI Ortigas-Cainta (Culinary Arts, Graduate with Honors, 2021-2023)
              </HoverCardContent>
            </HoverCard>
          </div>

 
          <div>
            <h1 className="text-2xl font-bold mb-2">Skills:</h1>
            <div className="space-y-4">
              <div>
                <h1>Network Configuration and Management</h1>
                <Progress value={50} />
              </div>
              <div>
                <h1>IT Essentials and Networking Fundamentals</h1>
                <Progress value={70} />
              </div>
              <div>
                <h1>Computer Systems Servicing</h1>
                <Progress value={90} />
              </div>
              <div>
                <h1>Troubleshooting Hardware and Software Issues</h1>
                <Progress value={60} />
              </div>
              <div>
                <h1>Database Management and SQL</h1>
                <Progress value={40} />
              </div>
              <div>
                <h1>Installing and Configure Operating Systems (Windows Server)</h1>
                <Progress value={80} />
              </div>
              <div>
                <h1>Basic Programming Skills (Laravel, Java, JavaScript, Oracle, Android)</h1>
                <Progress value={50} />
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-4">Personal Information:</h1>
            <div className="space-y-4">
              <Collapsible>
                <CollapsibleTrigger className="flex justify-between items-center p-2 border rounded-md shadow-sm cursor-pointer hover:bg-gray-100">
                  <span>Birth Date</span>
                  <span>▼</span>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-2 bg-gray-50 rounded-md border border-t-0">
                  February 12, 2004
                </CollapsibleContent>
              </Collapsible>

              <Collapsible>
                <CollapsibleTrigger className="flex justify-between items-center p-2 border rounded-md shadow-sm cursor-pointer hover:bg-gray-100">
                  <span>Civil Status</span>
                  <span>▼</span>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-2 bg-gray-50 rounded-md border border-t-0">
                  Single
                </CollapsibleContent>
              </Collapsible>

              <Collapsible>
                <CollapsibleTrigger className="flex justify-between items-center p-2 border rounded-md shadow-sm cursor-pointer hover:bg-gray-100">
                  <span>Age</span>
                  <span>▼</span>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-2 bg-gray-50 rounded-md border border-t-0">
                  20
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default App
