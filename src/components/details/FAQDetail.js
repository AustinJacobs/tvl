import React from 'react';
import { Collapse, Grid, Text } from '@nextui-org/react';

export default function FAQDetail() {
  return (
    <Grid.Container>
      <Grid>
        <Collapse.Group>
          <Collapse title='Do I need to bring my own waders?'>
            <Text className='collapse-text'>
              Most of your fishing is from a drift boat. If you never want to
              get your feet wet, you can fish from the boat all day. There are
              opportunities to get out and wade if you wish. You don’t need wade
              to catch fish, however. If you are here for the shoulder months
              April, May, early June, late September or October, waders are
              welcome in case of rain or wading. During late June, July, August
              and early September you can wet wade with no problem.
            </Text>
          </Collapse>
          <Collapse title='Do you have rental gear?'>
            <Text className='collapse-text'>
              Rental rods and reels are available in the tackle shop. We carry
              Sage and Waterworks/Lamson.
            </Text>
          </Collapse>
          <Collapse title='Where do I get a fishing license?'>
            <Text className='collapse-text'>
              You can buy a license at the tackle shop here at the lodge. You
              can also buy one online at{' '}
              <a
                href='https://idfg.idaho.gov/licenses'
                target='_blank'
                rel='noreferrer'>
                Idaho Fish & Game Licenses.
              </a>
            </Text>
          </Collapse>
          <Collapse title='What is your cancellation policy?'>
            <Text className='collapse-text'>
              When reserving days at the lodge, a $500.00 per day per boat
              deposit fee is required to confirm reservations. There will be no
              credit of deposits when cancellations are made within 30 days of
              your trip. If cancellations are made prior to 30 days before your
              arrival, your deposit will be transferred to confirm a future
              reservation at the lodge. There will be no cash refunds of
              deposits. All deposits will be forfeited or credited based on this
              reservation policy. We take into consideration your situation and
              go from the spirit of the law on cancellations.
            </Text>
          </Collapse>
          <Collapse title='Which airport should I fly into?'>
            <Text className='collapse-text'>
              You have three options. Idaho Falls, Idaho is a good choice. It
              may be cheaper than another option, Jackson Wyoming. If you have a
              private or chartered plane you can fly into Driggs, Idaho. We
              provide airport service to all three locations.
            </Text>
          </Collapse>
          <Collapse title='Will I have the same guide everyday?'>
            <Text className='collapse-text'>
              Each day you will have a new guide. You will benefit from a
              different guide each day. This will give you the opportunity to
              learn from several different guides.
            </Text>
          </Collapse>
          <Collapse title="What if I don't want a long day?">
            <Text className='collapse-text'>
              Many of our guests want to fish all day. If you want a shorter
              one, no problem. Just let us know, we can fit your schedule.
            </Text>
          </Collapse>
          <Collapse title='Can I come alone?'>
            <Text className='collapse-text'>
              Fishing alone even if you are in a group is a great way to catch a
              ton of fish. The guide will be concentrating on you and your
              needs. This is a great chance to improve your skills.
            </Text>
          </Collapse>
          <Collapse title='What day of the week should I come?'>
            <Text className='collapse-text'>
              You can arrive on any day of the week. Tailor your trip to your
              schedule. You can stay at the lodge as long or short as you like.
            </Text>
          </Collapse>
          <Collapse title="What if someone in my group doesn't want to fish everyday?">
            <Text className='collapse-text'>
              There are many other things to do in Teton Valley. We can help set
              up excursions for any of your group. They are welcome to just hang
              out at the lodge too. Great excursion options are golfing, day
              spa, sightseeing or hiking.
            </Text>
          </Collapse>
          <Collapse title='Can my group rent out the entire lodge?'>
            <Text className='collapse-text'>
              Absolutely. A group needs at least 24 people to get the Lodge
              exclusive. Your group would then be able to set meal times,
              fishing schedules and have the lodge to yourself.
            </Text>
          </Collapse>
          <Collapse title='I have special dietary needs, can you accommodate me?'>
            <Text className='collapse-text'>
              Our chefs are happy to make meals according to your dietary needs.
            </Text>
          </Collapse>
          <Collapse title='I want to bring my kids. What is a good age to start them fly fishing?'>
            <Text className='collapse-text'>
              All kids are different. A good general age for kids is 12. By this
              age, they have more patience and are able to fish all day. If you
              feel your child is old enough, they probably are.
            </Text>
          </Collapse>
          <Collapse title='Can I just fish with you for the day?'>
            <Text className='collapse-text'>
              For sure. Many people from the area fish with us on day trips. You
              don’t have to stay at the Lodge to get out on the rivers. Our
              experienced guides will provide an excellent experience for your
              day trip.
            </Text>
          </Collapse>
          <Collapse title='What is the best rod size for the area?'>
            <Text className='collapse-text'>
              While many rod sizes will work in given circumstances, your best
              bet is a 6 weight 9-foot rod. You will need to throw big bugs and
              small ones too. With this size rod, you will be able to cast at
              distance and into the wind. You will also be able to fight fish
              properly, being able to release them quickly.
            </Text>
          </Collapse>
        </Collapse.Group>
      </Grid>
    </Grid.Container>
  );
}
