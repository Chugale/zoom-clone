'use client';
import Image from 'next/image'
import { useToast } from './ui/use-toast'
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import {avatarImage} from '@/constants'

interface MeetingCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string
}


const MeetingCard = ({title, date, icon, isPreviousMeeting, buttonIcon1, buttonText, handleClick, link} : MeetingCardProps) => {
  const { toast } = useToast();

  //REACH GOAL FOR SELF CALC OVERFLOW OF ATTENDEES
  // const avatarImages = () => {
  //   const countOverflow = avatarImage.length - 5;

  //   return (
  //   <div className='relative flex w-full max-sm:hidden'>
  //   {avatarImage.map((img, index) => (
  //       <Image
  //         key={index}
  //         src={img}
  //         alt="attendees"
  //         width={40}
  //         height={40}
  //         className={cn("size-10 rounded-full", { absolute: index > 0 })}
  //         style={{ top: 0, left: index * 20 }}
  //       />
  //     ))}

  //     <div className='flex-center absolute left-[136px] size-10 rounded-full border-[5px] border-dark-2 bg-dark-1'>
  //     {/* insert icons of attendees */}
  //     <Button>
  //      +{countOverflow}
  //     </Button>
  //     </div>
  //   </div>
  //   )
  // };


  return (
    <section className='flex min-h-[258px] w-full flex-col justify-between rounded-[14px] bg-dark-1 px-5 py-8 xl:max-w-[568px]'>
      <article className='flex flex-col gap-5'>
        <Image src={icon} alt='upcoming' width={28} height={28}/>
        <div className='flex justify-between'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <p className='text-base font-normal'>{date}</p>
          </div>
        </div>
      </article>
      <article className={cn('flex justify-center relative', {})}>
        {/* {avatarImages()} */}
        <div className='relative flex w-full max-sm:hidden'>
          {avatarImage.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="attendees"
            width={40}
            height={40}
            className={cn("size-10 rounded-full", { absolute: index > 0 })}
            style={{ top: 0, left: index * 20 }}
          />
        ))}

          {/* <div className='flex-center absolute left-[136px] size-10 rounded-full border-[5px] border-dark-2 bg-dark-1'>
           ATTENDEE OVERFLOW ICON WITH +(#)
          </div> */}
    </div>
        {
          !isPreviousMeeting && (
            <div className='flex gap-2'>
              <Button onClick={handleClick}
                className='rounded bg-blue-1 px-6'>
                  {
                    buttonIcon1 && (
                      <Image src={buttonIcon1}
                        alt='feature'
                        width={20} height={20} />
                    )
                  }
                  &nbsp; {buttonText}
              </Button>
              <Button className='bg-dark-2 px-6'
                onClick={() => {
                  navigator.clipboard.writeText(link);
                  toast({
                    title: 'Link Copied'
                  })
                }}
              >
                <Image src='/icons/copy.svg'
                  alt='feature'
                  width={20} height={20}
                />
                &nbsp; Copy Link
              </Button>
            </div>
          )
        }
      </article>
    </section>
  )
}

export default MeetingCard