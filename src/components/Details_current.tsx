import {StyleSheet, ScrollView, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Details_description from './Details_description';
import Footer_component from './Footer_component';
import {Image, Text, Icon, Row, Button, Modal} from 'native-base';
import Activities from './Activities';
import Place_bid_modal from './Place_bid_modal';
import {useAppSelector} from '../hooks/reduxhooks';
type Props = {};

const Details_current = (props: any) => {
  const [showModal, setShowModal] = useState(false);
  console.log(props.data);

  return (
    <ScrollView style={styles.container}>
      <View>
        <Details_description data={props.data} />
      </View>
      <View>
        <View style={styles.currentBidCon}>
          <View>
            <Text
              fontFamily={'body'}
              fontSize={'20px'}
              fontStyle={'normal'}
              color={'white'}>
              Current Bid
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
              <Text
                fontFamily={'body'}
                fontSize={'24px'}
                fontStyle={'bold'}
                color={'white'}>
                0.50 ETH
              </Text>
              <Text
                fontFamily={'body'}
                fontSize={'20px'}
                fontStyle={'bold'}
                color={'white'}>
                {' '}
                $2,683.73
              </Text>
            </View>
          </View>
          <View style={styles.timeCon}>
            <View>
              <Text
                fontFamily={'body'}
                fontSize={'24px'}
                fontStyle={'bold'}
                color={'white'}>
                12
              </Text>
              <Text
                fontFamily={'body'}
                fontSize={'16px'}
                fontStyle={'normal'}
                color={'white'}>
                hours
              </Text>
            </View>
            <View>
              <Text
                fontFamily={'body'}
                fontSize={'24px'}
                fontStyle={'bold'}
                color={'white'}>
                30
              </Text>
              <Text
                fontFamily={'body'}
                fontSize={'16px'}
                fontStyle={'normal'}
                color={'white'}>
                minutes
              </Text>
            </View>
            <View>
              <Text
                fontFamily={'body'}
                fontSize={'24px'}
                fontStyle={'bold'}
                color={'white'}>
                32
              </Text>
              <Text
                fontFamily={'body'}
                fontSize={'16px'}
                fontStyle={'normal'}
                color={'white'}>
                seconds
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={styles.placeBidBtn}
              onPress={() => {
                setShowModal(true);
              }}>
              <Text
                fontFamily={'body'}
                fontSize={'16px'}
                fontStyle={'bold'}
                color={'white'}>
                Place a bid
              </Text>
            </TouchableOpacity>
          </View>
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content
              maxWidth="600px"
              width={'90%'}
              backgroundColor={'#222222'}>
              <Modal.CloseButton />

              <Modal.Body>
                <Place_bid_modal />
              </Modal.Body>
            </Modal.Content>
          </Modal>
        </View>

        <View style={styles.activities}>
          <Text
            fontFamily={'body'}
            fontSize={'20px'}
            fontStyle={'normal'}
            color={'white'}
            marginBottom={'30px'}
            marginTop={'20px'}>
            Activity
          </Text>
          <Activities />
        </View>
        <View>
          <Footer_component />
        </View>
      </View>
    </ScrollView>
  );
};

export default Details_current;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  currentBidCon: {
    height: 300,
    width: '90%',
    backgroundColor: '#333333',
    marginTop: 20,
    padding: 20,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
  timeCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  ownerDeds: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#555555',
    width: 145,
    height: 40,
    borderRadius: 120,
  },
  placeBidBtn: {
    height: 40,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0038F5',
    marginTop: 40,
  },
  activities: {alignSelf: 'center', marginTop: 20},
  activity: {
    height: 100,
    width: '90%',
    backgroundColor: '#333333',
    borderRadius: 20,
    flexDirection: 'row',
    padding: 15,
  },
});
